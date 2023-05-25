const Manager = require('../lib/Manager');

describe('Manager', () => {
  describe('Initialization', () => {
    it('should create an object with a name, id, email, and office number', () => {
      const manager = new Manager('John Doe', 1, 'john.doe@example.com', 123);

      expect(manager.name).toBe('John Doe');
      expect(manager.id).toBe(1);
      expect(manager.email).toBe('john.doe@example.com');
      expect(manager.officeNumber).toBe(123);
    });
  });

  describe('Methods', () => {
    it('should return the manager name', () => {
      const manager = new Manager('John Doe', 1, 'john.doe@example.com', 123);

      expect(manager.getName()).toBe('John Doe');
    });

    it('should return the manager ID', () => {
      const manager = new Manager('John Doe', 1, 'john.doe@example.com', 123);

      expect(manager.getId()).toBe(1);
    });

    it('should return the manager email', () => {
      const manager = new Manager('John Doe', 1, 'john.doe@example.com', 123);

      expect(manager.getEmail()).toBe('john.doe@example.com');
    });

    it('should return the manager role', () => {
      const manager = new Manager('John Doe', 1, 'john.doe@example.com', 123);

      expect(manager.getRole()).toBe('Manager');
    });

    it('should return the manager office number', () => {
      const manager = new Manager('John Doe', 1, 'john.doe@example.com', 123);

      expect(manager.getOfficeNumber()).toBe(123);
    });
  });
});
