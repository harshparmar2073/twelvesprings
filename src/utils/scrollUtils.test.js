/**
 * Simple test file for scroll utilities
 * This can be run with Jest or any testing framework
 */

import { extractSectionId, handleNavigation } from './scrollUtils';

// Mock navigate function
const mockNavigate = jest.fn();

describe('Scroll Utilities', () => {
  describe('extractSectionId', () => {
    test('should extract section ID from hash link', () => {
      expect(extractSectionId('/#expertise')).toBe('expertise');
      expect(extractSectionId('/#aboutus')).toBe('aboutus');
      expect(extractSectionId('/#technologies')).toBe('technologies');
    });

    test('should return null for non-hash links', () => {
      expect(extractSectionId('/landing')).toBeNull();
      expect(extractSectionId('/')).toBeNull();
      expect(extractSectionId('')).toBeNull();
    });
  });

  describe('handleNavigation', () => {
    beforeEach(() => {
      mockNavigate.mockClear();
    });

    test('should call navigate for non-hash links', () => {
      handleNavigation('/landing', mockNavigate);
      expect(mockNavigate).toHaveBeenCalledWith('/landing');
    });

    test('should not call navigate for hash links', () => {
      handleNavigation('/#expertise', mockNavigate);
      expect(mockNavigate).not.toHaveBeenCalled();
    });
  });
});