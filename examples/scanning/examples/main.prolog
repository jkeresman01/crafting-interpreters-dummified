let rec gcd a b = 
    a = b then a 
    else if a > b then gcd b (a - b)
        else gcd a (b -a)
