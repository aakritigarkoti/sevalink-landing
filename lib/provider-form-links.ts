export const PROVIDER_FORM_LINKS = {
  homecare:
    "https://docs.google.com/forms/d/e/1FAIpQLSeqKrfNe-0ptAVbNbOrUlDcHYbiRXGeqcJBFkSPdVaa1AOInw/viewform",
  hospital:
    "https://docs.google.com/forms/d/e/1FAIpQLSeqNvKGSy3nR7ZSzZqlPmiFgKPZ7WsP3wXtOSmirR-oxIs6eg/viewform",
  driverFleet:
    "https://docs.google.com/forms/d/e/1FAIpQLSdfvJoy_KpBL0cglfvxySzdgw0zjzn9_anLumeDm3-xVjcT8w/viewform",
} as const;

export const PROVIDER_MENU_ITEMS = [
  {
    id: "homecare",
    label: "Home Care Provider",
    description: "Join as a home care service provider",
    href: PROVIDER_FORM_LINKS.homecare,
  },
  {
    id: "hospital",
    label: "Hospital Partnership",
    description: "Partner your hospital with SevaLink",
    href: PROVIDER_FORM_LINKS.hospital,
  },
  {
    id: "driver-fleet",
    label: "Driver / Fleet Partner",
    description: "Join as ambulance / driver partner",
    href: PROVIDER_FORM_LINKS.driverFleet,
  },
] as const;
