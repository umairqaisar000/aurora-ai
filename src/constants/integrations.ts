type IntegrationsListItemProps = {
  id: string
  name: 'stripe'
  logo: string
  description: string
  title: string
  modalDescription: string
}

export const INTEGRATION_LIST_ITEMS: IntegrationsListItemProps[] = [
  {
    id: '1',
    name: 'stripe',
    description:
      'Stripe is the fastest and easiest way to integrate payments and financial services into your software platform or marketplace.',
    logo: '03363d88-bdd2-45f7-a97e-8cab83639f1c',
    title: 'Connect Stripe Account',
    modalDescription:
      'The world’s most successful platforms and marketplaces including Shopify and DoorDash, use Stripe Connect.',
  },
]
