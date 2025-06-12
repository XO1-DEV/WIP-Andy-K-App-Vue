export interface User {
  id: string;
  name: string;
  email: string;
  preferences?: UserPreferences;
}

export interface UserPreferences {
  language: 'fr' | 'en' | 'es' | 'de';
  theme: 'light' | 'dark' | 'auto';
  accessibility: AccessibilityPreferences;
}

export interface AccessibilityPreferences {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: 'visual' | 'auditory' | 'motor' | 'cognitive';
  missions: Mission[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Mission {
  id: string;
  courseId: string;
  title: string;
  description: string;
  instructions: string;
  order: number;
  isCompleted: boolean;
  character: Character;
}

export interface Character {
  id: string;
  name: string;
  avatar: string;
  description: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

export interface Theme {
  colors: {
    primary: Record<string, string>;
    purple: Record<string, string>;
    green: Record<string, string>;
    pink: Record<string, string>;
    yellow: Record<string, string>;
    neutral: Record<string, string>;
    alert: Record<string, string>;
  };
  fonts: {
    main: string;
  };
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
}

// Types pour les futures fonctionnalités d'administration
export interface AdminUser extends User {
  role: 'admin' | 'editor' | 'viewer';
  permissions: Permission[];
}

export interface Permission {
  id: string;
  name: string;
  resource: string;
  action: 'create' | 'read' | 'update' | 'delete';
}

export interface ContentManagement {
  courses: Course[];
  missions: Mission[];
  characters: Character[];
  settings: SiteSettings;
}

export interface SiteSettings {
  maintenance: boolean;
  featuredCourse?: string;
  announcements: Announcement[];
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  type: 'info' | 'warning' | 'success' | 'error';
  startDate: Date;
  endDate?: Date;
  active: boolean;
}