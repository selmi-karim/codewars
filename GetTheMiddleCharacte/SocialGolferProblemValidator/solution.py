def valid(a):
    
    players = set("".join(["".join(day) for day in a]))
    days = ["".join(day) for day in a]

    # each player plays daily
    for player in players:
        for day in days:
            if not player in day:
                return False
    
    # each player never plays with another player twice
    played_with = {k: [] for k in players}
    for day in a:
        for group in day:
            for player in group:
                played = list(group)
                played.remove(player)
                set(played)
                set(played_with[player])
                if set(played) & set(played_with[player]):
                    return False
                played_with[player].extend(played)
        
    
    # groups are always the same size
    for day in a:
        for group in day:
            if len(group) != len(a[0][0]):
                return False
    
    return True
