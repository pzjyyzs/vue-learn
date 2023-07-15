1. 组件 dispatch -> action
2. dispatch -> type(actionType) -> 某一个action
3. action -> commit(调用) -> mutation (唯一更改state的方法)
4. mutation -> change state
5. render方案： state -> 数据流 -> 实图 (框架实现)


1. actionTye action类型
2. actions   调用mutation的方法
3. mutation  更改state的方法
4. state     中央数据管理池
5. store出口  actions、mutations、state统一到仓库里管理