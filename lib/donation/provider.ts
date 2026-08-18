/**
 * Donation provider adapter boundary.
 *
 * The UI (components/donation/*) must depend only on this interface, never
 * on a specific payment vendor. Swap `mockDonationProvider` for a real
 * implementation once a provider is selected — see docs/06_ASSET_PLAN.md /
 * BUILD_REPORT.md "Donation provider status" for what is still open.
 *
 * To wire a real provider:
 * 1. Implement `DonationProvider` (e.g. lib/donation/providers/tranzila.ts).
 * 2. Set NEXT_PUBLIC_DONATION_PROVIDER and provider credentials in .env.local
 *    (never commit secrets).
 * 3. Update `getDonationProvider()` below to return the real implementation.
 */

export type DonationFrequency = "one-time" | "monthly";

export interface DonationRequest {
  amountIls: number;
  frequency: DonationFrequency;
  programId?: string;
  donorName?: string;
  donorEmail?: string;
}

export interface DonationSession {
  redirectUrl: string;
  sessionId: string;
}

export interface DonationProvider {
  id: string;
  isConfigured: boolean;
  createSession(request: DonationRequest): Promise<DonationSession>;
}

/**
 * Mock adapter — used until a real payment processor is configured.
 * Never actually charges anything; makes that fact obvious in the UI via
 * `isConfigured: false`.
 */
export const mockDonationProvider: DonationProvider = {
  id: "mock",
  isConfigured: false,
  async createSession(request) {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return {
      sessionId: `mock_${Date.now()}`,
      redirectUrl: `/donate/thank-you?amount=${request.amountIls}&frequency=${request.frequency}`,
    };
  },
};

export function getDonationProvider(): DonationProvider {
  // [נדרש אימות: ספק סליקה] — no live provider is configured yet.
  return mockDonationProvider;
}

export const SUGGESTED_AMOUNTS_ILS = [50, 100, 180, 360] as const;
