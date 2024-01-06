import store from 'svgstore';
import { optimize } from 'svgo';
import path from 'path';
import fs from 'fs'

export const svgstore = (options = {}) => {
    const inputFolder = options.inputFolder || 'src/assets/icon';
    return {
        name: 'svgstore',
        // 可以直接引 svg_bundle，加这一层是为了 避开一些编辑器报错 
        resolveId(id) {
            if (id === '@svgstore') {
                return 'svg_bundle.js'
            }
        },
        load(id) {
            if (id === 'svg_bundle.js') {
                const sprites = store(options);
                const iconsDir = path.resolve(inputFolder);
                const fileArray = fs.readdirSync(iconsDir).filter(item => item !== '.DS_Store');
                for(const file of fileArray) {
                    const filepath = path.join(iconsDir, file);
                    const svgid = path.parse(file).name;
                    let code = fs.readFileSync(filepath, { encoding: 'utf-8' })
                    sprites.add(svgid, code);
                }
                const { data: code } = optimize(sprites.toString({ inline: options.inline }), {
                    plugins: [
                        'cleanupAttrs', 'removeDoctype', 'removeComments', 'removeTitle', 'removeDesc',
                        'removeEmptyAttrs',
                        { name: 'removeAttrs', params: { attrs: "(data-name|data-xxx)" } }
                    ]
                })
                return `const div = document.createElement('div')
                        div.innerHTML = \`${code}\`
                        const svg = div.getElementsByTagName('svg')[0]
                        if (svg) {
                            svg.style.position = 'absolute'
                            svg.style.width = 0
                            svg.style.height = 0
                            svg.style.overflow = 'hidden'
                            svg.setAttribute("aira-hidden", "true")
                        }
                        document.addEventListener('DOMContentLoaded', () => {
                            if (document.body.firstChild) {
                                document.body.insertBefore(div, document.body.firstChild)
                            } else {
                                document.body.appendChild(div)
                            }
                        })
                        `
            }
        }
    }
}