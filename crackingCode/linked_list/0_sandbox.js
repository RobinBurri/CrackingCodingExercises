export class Node {
    constructor(data = 0) {
        this.next = null;
        this.data = data;
    }
}

export class SingleLL {
    constructor() {
        this.head = null;
    }

    printNodes() {
        if (!this.head) return;
        let tmp = this.head;
        while (tmp !== null) {
            console.log(tmp.data);
            tmp = tmp.next;
        }
    }

    addToTail(nodeToAppend) {
        if (this.head === null) {
            this.head = nodeToAppend;
            return;
        }

        let tmp = this.head;
        while (tmp.next !== null) {
            tmp = tmp.next;
        }
        tmp.next = nodeToAppend;
    }

    removeDup() {
        if (!this.head) return;
        let set = new Set();
        let tmp = this.head;
        set.add(tmp.data);
        while (tmp.next) {
            if (!set.has(tmp.next.data)) {
                set.add(tmp.next.data);
            }
            tmp = tmp.next;
        }

        this.head = null;
        for (let val of set) {
            this.addToTail(new Node(val));
        }

     
    }

    findKthToLast(th) {
        if (!this.head || th < 0) return;
        const length = this.llength();
        if (length < th) return;
        let diff = length - th - 1;
        if (diff === 0) return this.head.data;
        let tmp = this.head;
        while (diff > 0) {
            tmp = tmp.next;
            diff--;
        }
        return tmp.data;
    }

    llength() {
        if (!this.head) return 0;
        let tmp = this.head;
        let count = 1;
        while (tmp.next) {
            count++;
            tmp = tmp.next;
        }
        return count;
    }

    addAtStart() {}
}
