function solution(friends, gifts) {
    let arr = [];
    for (let friend of friends) {
        arr.push(0);
    }
    
    for (let i = 0; i < friends.length; i++) {
        for (let j = 1; i+j < friends.length; j++) {
            let friend_1 = friends[i];
            let friend_2 = friends[i+j];
            let fr_1_2_count = 0;
            let fr_2_1_count = 0;
            let fr_1_point = 0;
            let fr_2_point = 0;
            for (let gift of gifts) {
                let giftHist = gift.split(' ')
                if (giftHist[0] == friend_1) {
                    fr_1_point++;
                    if (giftHist[1] == friend_2) {
                        fr_1_2_count++;
                    }
                }
                if (giftHist[0] == friend_2) {
                    fr_2_point++;
                    if (giftHist[1] == friend_1) {
                        fr_2_1_count++;
                    }
                }
                if (giftHist[1] == friend_1) {
                    fr_1_point--;
                }
                if (giftHist[1] == friend_2) {
                    fr_2_point--;
                }
            }
            if(fr_1_2_count > fr_2_1_count) {
                arr[i] += 1;
            } else if(fr_1_2_count < fr_2_1_count) {
                arr[i+j] += 1;
            } else {
                if (fr_1_point > fr_2_point) {
                    arr[i] += 1;
                }
                if (fr_1_point < fr_2_point) {
                    arr[i+j] += 1;
                }
            }        
        }
    }
    
    
    
    return Math.max(...arr);
}