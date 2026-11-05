import type { RecallStateSnapshot } from "@/types";

/**
 * New installs start with an empty library. Starter decks remain available
 * through the onboarding gallery and can be imported by choice.
 */
export function createSeedSnapshot(): RecallStateSnapshot {
  return {
    decks: [],
    cards: [],
    studySessions: [],
    reviewLogs: [],
    settings: {
      theme: "light",
      accentColor: "zinc",
      dyslexiaFont: false,
      seededAt: new Date().toISOString(),
      dailyNewCardLimit: 20,
      leechThreshold: 5,
      onboardingComplete: false,
      xp: 0,
      achievements: [],
      dailyGoal: 20,
      notificationsEnabled: false,
      soundVolume: 100,
      allowHtml: false,
      desiredRetention: 0.9,
      backupFolder: null,
      backupSchedule: "never",
      lastBackupAt: null,
      syncFolder: null,
      syncEnabled: false,
      syncCode: null,
      syncRelayUrl: null,
      syncLastAt: null,
      syncAutoInterval: 0,
      ttsEnabled: false,
      ttsAutoRead: false,
      ttsSpeed: 1,
      fsrsWeights: null,
      voiceInputEnabled: true,
      swipeGestures: true,
      colorBlindMode: false,
      shortcuts: undefined,
    },
  };
}
