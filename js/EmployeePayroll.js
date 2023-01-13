class EmployeePayroll {

    get id() { return this._id };
    set id(id) {
        this._id = id;
    }

    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp("[A-Z]{1}[A-Za-z]{2,}$");
        if (nameRegex.test(name)) {
            this._name = name;
        } else throw "Name is incorrect";
    }

    get profilePic() { return this._profilePic; }
    set profilePic(profilePic) {
        if (profilePic == '' || profilePic == undefined) {
            throw "Profile pic must be selected";
        }
        this._profilePic = profilePic;
    }

    get gender() { return this._gender; }
    set gender(gender) {
        this._gender = gender;
    }

    get department() { return this._department; }
    set department(department) {
        this._department = department;
    }

    get salary() { return this._salary; }
    set salary(salary) {
        this._salary = salary;
    }

    get notes() { return this._notes; }
    set notes(notes) {
        this._notes = notes;
    }

    get startDate() { return this._startDate; }
    set startDate(startDate) {
        this._startDate = startDate;
    }

    toString() {
        return "id = " + this.id + ", name = " + this.name + ", profile= " + this.profilePic + ", gender = " + this.gender +
            ", department = " + this.department + ", salary = " + this.salary + ", notes = " + this.notes +
            ", startdate = " + this.startDate;
    }
}