import { describe, expect, it } from "vitest";
import { createSeedSnapshot } from "@/data/seed";

describe("createSeedSnapshot", () => {
  it("starts with an empty library and no study history", () => {
    const snapshot = createSeedSnapshot();

    expect(snapshot.decks).toEqual([]);
    expect(snapshot.cards).toEqual([]);
    expect(snapshot.studySessions).toEqual([]);
    expect(snapshot.reviewLogs).toEqual([]);
    expect(snapshot.settings.onboardingComplete).toBe(false);
  });
});
