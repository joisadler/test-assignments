const func = (s, a, b) => {
    const match_empty=/^$/ ;
    if (s.match(match_empty)) {
        return -1;
    }
    {
        const i = s.length -1;
        const aIndex = -1;
        const bIndex = -1;

        while ((aIndex == -1) && (bIndex==-1) && (i>=0))
        {
            if (s.substring(i, i+1) == a)
                aIndex=i;
        	if (s.substring(i, i+1) == b)
                bIndex=i;
        	i--;
        }

        if (aIndex != -1)
        {
            if (bIndex == -1) {
                return aIndex;
         }
        	else {
                return Math.max(aIndex, bIndex);
        }
         if (bIndex != -1) {
                return bIndex;
         }
 	         return -1;
        }
    }
};
