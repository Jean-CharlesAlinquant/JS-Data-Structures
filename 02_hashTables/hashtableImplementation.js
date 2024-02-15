class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if(this.data[address] === undefined) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
    }

    get(key) {
        //console.log(this.data);
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if(currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        const keysArray = [];
        const flatData = this.data.flat();
        flatData.forEach(element => keysArray.push(element[0]));
        // console.log(flatData);
        // for (let i = 0; i < this.data.length; i++) {
        //     if(this.data[i]) {
        //         keysArray.push(this.data[i][0][0]);
        //         for (let j = 1; j < this.data[i].length; j++) {
        //             keysArray.push(this.data[i][j][0]);
        //         }
        //     }
        // }
        return keysArray;
    }
}

const hashTable = new HashTable(50);
hashTable.set('grapes', 937);
hashTable.set('apples', 234);
hashTable.set('bananas', 123);
hashTable.set('oranges', 456);
hashTable.set('pears', 789);
hashTable.set('strawberries', 378);
hashTable.set('blueberries', 854);
hashTable.set('lemons', 987);
hashTable.set('kiwi', 56);
hashTable.set('mangoes', 678);

console.log(hashTable.keys());
console.log(hashTable.get('blueberries'));

