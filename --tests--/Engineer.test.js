const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  describe('Initialization', () => {
    it('should create an object with a name, id, email, and github username', () => {
      const engineer = new Engineer('Jane Smith', 2, 'jane.smith@example.com', 'janesmith');

      expect(engineer.name).toBe('Jane Smith');
      expect(engineer.id).toBe(2);
      expect(engineer.email).toBe('jane.smith@example.com');
      expect(engineer.github).toBe('janesmith');
    });
  });

  describe('Methods', () => {
    it('should return the engineer name', () => {
      const engineer = new Engineer('Jane Smith', 2, 'jane.smith@example.com', 'janesmith');

      expect(engineer.getName()).toBe('Jane Smith');
    });

    it('should return the engineer ID', () => {
      const engineer = new Engineer('Jane Smith', 2, 'jane.smith@example.com', 'janesmith');

      expect(engineer.getId()).toBe(2);
    });

    it('should return the engineer email', () => {
      const engineer = new Engineer('Jane Smith', 2, 'jane.smith@example.com', 'janesmith');

      expect(engineer.getEmail()).toBe('jane.smith@example.com');
    });

    it('should return the engineer role', () => {
      const engineer = new Engineer('Jane Smith', 2, 'jane.smith@example.com', 'janesmith');

      expect(engineer.getRole()).toBe('Engineer');
    });

    it('should return the engineer GitHub username', () => {
      const engineer = new Engineer('Jane Smith', 2, 'jane.smith@example.com', 'janesmith');

      expect(engineer.getGithub()).toBe('janesmith');
    });
  });
});
