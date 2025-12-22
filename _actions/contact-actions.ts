"use server";

import contactData from "@/_data/general-data.json";
import { verifyRecaptchaToken } from "@/_lib/verify-recaptcha";

const {
  contact: { accountsEmail, dispensaryEmail, phone, afterHoursPhone },
} = contactData;

export const fetchAccountsEmail = async (recaptchaToken?: string) => {
  if (recaptchaToken) {
    const recaptchaResult = await verifyRecaptchaToken(recaptchaToken);
    if (!recaptchaResult.success) {
      throw new Error(recaptchaResult.error || "reCAPTCHA verification failed");
    }
  }
  return accountsEmail;
};

export const fetchDispensaryEmail = async (recaptchaToken?: string) => {
  if (recaptchaToken) {
    const recaptchaResult = await verifyRecaptchaToken(recaptchaToken);
    if (!recaptchaResult.success) {
      throw new Error(recaptchaResult.error || "reCAPTCHA verification failed");
    }
  }
  return dispensaryEmail;
};

export const fetchPhone = async (recaptchaToken?: string) => {
  if (recaptchaToken) {
    const recaptchaResult = await verifyRecaptchaToken(recaptchaToken);
    if (!recaptchaResult.success) {
      throw new Error(recaptchaResult.error || "reCAPTCHA verification failed");
    }
  }
  return phone;
};

export const fetchAfterHoursPhone = async (recaptchaToken?: string) => {
  if (recaptchaToken) {
    const recaptchaResult = await verifyRecaptchaToken(recaptchaToken);
    if (!recaptchaResult.success) {
      throw new Error(recaptchaResult.error || "reCAPTCHA verification failed");
    }
  }
  return afterHoursPhone;
};
