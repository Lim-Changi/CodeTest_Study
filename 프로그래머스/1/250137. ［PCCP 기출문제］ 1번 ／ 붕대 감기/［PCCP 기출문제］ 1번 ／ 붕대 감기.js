function solution(bandage, health, attacks) {
    var answer = 0;
    const attackCount = attacks.length
    const lastAttackTime = attacks[attackCount - 1][0];
    
    let currentHealth = health;
    let contiHealCount = 0;
    let timeHeal = bandage[1];
    const bonusHeal = bandage[2];
    
    const checkDeath = (currentHealth, damage) => {
        if (currentHealth - damage <= 0) return true
    }
    const damage = (time, attacks) => {
        if (attacks[0][0] == time) {
            const attack = attacks.shift()
            return attack[1];
        } else {
            return 0
        }
    }
    const heal = (currentHealth, healMount, max) => {
        if (currentHealth + healMount >= max) {
            return max;
        } else {
            return currentHealth + healMount
        }
    }
    const contiHealCheck = (damage) => {
        if (damage == 0) {
            contiHealCount++;
            if (contiHealCount == bandage[0]){
                contiHealCount = 0;
                return bonusHeal;
            }
            return 0;
        } else {
            contiHealCount = 0;
            return 0;
        }
    }
    
    
    for (let time = 0; time <= lastAttackTime; time++) {
        const timeDamage = damage(time, attacks);
        if(checkDeath(currentHealth, timeDamage)) {
            answer = -1;
            break;
        }
        if (timeDamage > 0) {
            currentHealth -= timeDamage;
            contiHealCount = 0;
            continue;
        }
        
        const bonusHealMount = contiHealCheck(timeDamage);
        currentHealth = heal(currentHealth, timeHeal + bonusHealMount, health)
    }
    if (answer == 0) {
        answer = currentHealth;
    }
    
    
    return answer;
}