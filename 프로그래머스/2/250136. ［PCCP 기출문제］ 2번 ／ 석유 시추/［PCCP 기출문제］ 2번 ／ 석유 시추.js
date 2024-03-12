function solution(land) {
    const rows = land.length;
    const cols = land[0].length;
    const dr = [1, 0, 0, -1];
    const dc = [0, -1, 1, 0];
    
    const podData = []

    const checkRange = (row, col) => row >= 0 && row < rows && col >= 0 && col < cols;

    const bfs = (startRow, startCol) => {
        let count = 0;
        const queue = [[startRow, startCol]];
        const cols = []

        while (queue.length > 0) {
            const [currentRow, currentCol] = queue.shift();

            if (land[currentRow][currentCol] === 1) {
                cols.push(currentCol);
                land[currentRow][currentCol] = 0; // Mark as visited
                count++;

                for (let d = 0; d < dr.length; d++) {
                    const nr = currentRow + dr[d];
                    const nc = currentCol + dc[d];
                    if (checkRange(nr, nc) && land[nr][nc] === 1) {
                        queue.push([nr, nc]);
                    }
                }
            }
        }
        podData.push([count,[...new Set(cols)]])
    };


    for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
            if (land[r][c] === 1) {
                bfs(r, c);
            }
        }
    }
    
    let colOilTotal = [];

    
    for (let c = 0; c < cols; c++) {
        let colOil = 0;
        for(let oilPod of podData) {
            if (oilPod[1].includes(c)){
                colOil+= oilPod[0]
            }
        }
        colOilTotal.push(colOil);
    }
    

    return Math.max(...colOilTotal);
}