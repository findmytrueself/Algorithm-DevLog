function solution(dirs) {
    let answer = 0;
    const direction = {
        U: [0, 1],
        D: [0, -1],
        R: [1, 0],
        L: [-1, 0],
    };

    let pos = [0, 0];
    const routes = {};
    for (let i = 0; i < dirs.length; i++) {
        const moveValue = direction[dirs[i]]; // 움직이는 좌표값
        const move = [pos[0] + moveValue[0], pos[1] + moveValue[1]]; // 현재좌표값에 움직이는 좌표값을 더해준다.
        if (move[0] > 5 || move[0] < -5 || move[1] > 5 || move[1] < -5) {
            continue; // 좌표 5,5~ -5,-5를 넘어가면 안더해주기 위함.
        }
        let from = `${pos[0]},${pos[1]}`; // 현재좌표를 저장
        let to = `${move[0]},${move[1]}`; // 움직이고 나서의 좌표를 저장
        if (!routes[from]) {
            routes[from] = {}; // 현재좌표가 최초면 현재좌표 key 빈값으로 추가
        }
        if (!routes[to]) {
            // 움직인 좌표가 최초면 움직인 좌표 key 빈값으로 추가
            routes[to] = {};
        }
        pos = [move[0], move[1]]; // 현재위치를 움직인 위치로 바꿔준다.
        if (routes[from][to] || routes[to][from]) {
            continue; // 만약에 기존에 거쳐온 길이면 더이상 안더해주고 넘겨준다.
        }

        routes[from][to] = true; // 거쳐온길을 true값으로 바꿔준다.
        routes[to][from] = true; // 거쳐온길을 true값으로 바꿔준다.
        answer++; // 길을 걸었기 때문에 answer에 1씩 추가.
    }
    return answer;
}
