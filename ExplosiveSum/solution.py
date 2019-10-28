def exp_sum(n):
    parts = {1:{1:1}}
    
    for i in range(2, n+1):
        parts[i] = {1:1, i:1}
        for j in range(2, i):
            parts[i][j] = sum([parts[i-j][k] for k in range(1, min(j+1, i-j+1))])

            
    return sum(parts[n].values())
    
    
    
