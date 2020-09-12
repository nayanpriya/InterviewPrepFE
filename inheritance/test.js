class Developer {
    constructor(firstname, lastname, jobId) {
        this.firstname = firstname;
        this.lastname = lastname;

    }

    getName() {
        return this.firstname + ' ' + this.lastname;
    }
    getDetails() {
        return this.jobId
    }
}

class ReactDeveloper extends Developer {
    constructor(firstname, lastname, jobId) {
        super(firstname, lastname)
        this.jobId = jobId;
    }

    getJob() {
        return 'React Developer';
    }
    getJobId() {
        return this.jobId
    }


}

var me = new ReactDeveloper('Robin', 'Wieruch', 100);
console.log(me.getName());
console.log(me.getJob());
console.log(me.getJobId())
console.log(me.getDetails())