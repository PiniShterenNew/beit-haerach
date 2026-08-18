/**
 * Analytics event boundary — see docs/09_ANALYTICS_AND_CRO.md for the full
 * funnel and event catalog. No analytics vendor is wired yet
 * [נדרש אימות: ספק אנליטיקס]; events are logged to the console in
 * development and dropped in production until a provider is connected.
 */

export type AnalyticsEvent =
  | "donation_cta_click"
  | "donation_started"
  | "donation_amount_selected"
  | "recurring_selected"
  | "donation_payment_started"
  | "donation_completed"
  | "donation_failed"
  | "volunteer_started"
  | "volunteer_completed"
  | "help_request_started"
  | "help_request_completed"
  | "phone_click"
  | "whatsapp_click"
  | "email_click";

export function trackEvent(event: AnalyticsEvent, payload?: Record<string, unknown>) {
  if (process.env.NODE_ENV !== "production") {
    console.debug(`[analytics] ${event}`, payload ?? {});
  }
  // Wire a real provider here (e.g. GA4 gtag, Meta Pixel, server-side event API).
  // window.gtag?.("event", event, payload);
}
