class MultiHalmaz{

    constructor(){
        this.data = {}
    }

    /**
     * Az A elem egy újabb példányának eltárolása
     */
    add(a){
        if(a in this.data){
            this.data[a] += 1
        }else{
            this.data[a] = 1
        }
    }

    debug(){
        console.log(this.data)
    }

    /**
     * Az a elem előfordulásainak száma
     * @returns 0, ha az elem nem szerepel.
     */
    get(a){
        if(a in this.data){
            return this.data[a]
        }else{
            return 0
        }
    }
    /**
     * Visszaadja az összes olyan elemet, mely egynél többször szerepel.
     */
    multiple(){
        let r = []
        for(const k in this.data){
            if(this.data[k] > 1){
                r.push(k)
            }
        }
        return r
    }
}