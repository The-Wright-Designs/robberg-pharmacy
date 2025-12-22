export interface showContactProps {
  buttonClasses?: string;
  linkClasses?: string;
}

export interface ShowEmailAddressProps extends showContactProps {
  emailType?: "accounts" | "dispensary";
}

export interface ShowPhoneNumberProps extends showContactProps {
  phoneType?: "main" | "afterHours";
}
