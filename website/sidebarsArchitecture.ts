import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

export default {
  architecture: [
    {
      type: 'category',
      label: 'Architecture',
      collapsed: false,
      items: [
        'architecture-overview',
        'technology-and-limitations',
        'challenges',
        {
          type: 'category',
          label: 'Core Concepts',
          collapsible: false,
          collapsed: false,
          items: [
            'concept-overview',
            'source-code-strategy',
            'cross-application-communication',
            'intention-api',
            'router-microfrontends',
            'activator',
          ],
        },
        {
          type: 'category',
          label: 'Build Tools',
          collapsible: false,
          collapsed: false,
          items: ['bundled-hermes'],
        },
        'architecture-glossary',
      ],
    },
  ],
} satisfies SidebarsConfig;
