const Intern = require('../lib/Intern');

describe('Intern', () => {
  describe('Initialization', () => {
    it('should create an object with a name, id, email, and school', () => {
      const intern = new Intern('Alex Johnson', 3, 'alex.johnson@example.com', 'University of ABC');

      expect(intern.name).toBe('Alex Johnson');
      expect(intern.id).toBe(3);
      expect(intern.email).toBe('alex.johnson@example.com');
      expect(intern.school).toBe('University of ABC');
    });
  });

  describe('Methods', () => {
    it('should return the intern name', () => {
      const intern = new Intern('Alex Johnson', 3, 'alex.johnson@example.com', 'University of ABC');

      expect(intern.getName()).toBe('Alex Johnson');
    });

    it('should return the intern ID', () => {
      const intern = new Intern('Alex Johnson', 3, 'alex.johnson@example.com', 'University of ABC');

      expect(intern.getId()).toBe(3);
    });

    it('should return the intern email', () => {
      const intern = new Intern('Alex Johnson', 3, 'alex.johnson@example.com', 'University of ABC');

      expect(intern.getEmail()).toBe('alex.johnson@example.com');
    });

    it('should return the intern role', () => {
      const intern = new Intern('Alex Johnson', 3, 'alex.johnson@example.com', 'University of ABC');

      expect(intern.getSchool()).toBe('University of ABC');
    });
  });
});
