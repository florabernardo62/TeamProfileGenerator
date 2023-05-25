const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('Initialization', () => {
    it('should create an object with a name, id, and email', () => {
      const employee = new Employee('John Doe', 1, 'john.doe@example.com');

      expect(employee.name).toBe('John Doe');
      expect(employee.id).toBe(1);
      expect(employee.email).toBe('john.doe@example.com');
    });
  });

  describe('Methods', () => {
    it('should return the employee name', () => {
      const employee = new Employee('John Doe', 1, 'john.doe@example.com');

      expect(employee.getName()).toBe('John Doe');
    });

    it('should return the employee ID', () => {
      const employee = new Employee('John Doe', 1, 'john.doe@example.com');

      expect(employee.getId()).toBe(1);
    });

    it('should return the employee email', () => {
      const employee = new Employee('John Doe', 1, 'john.doe@example.com');

      expect(employee.getEmail()).toBe('john.doe@example.com');
    });

    it('should return the employee role', () => {
      const employee = new Employee('John Doe', 1, 'john.doe@example.com');

      expect(employee.getRole()).toBe('Employee');
    });
  });
});
