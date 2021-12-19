/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Laravel Bitpay',
  tagline:
    'LaravelBitPay enables you and your business to transact in Bitcoin, Bitcoin Cash and 10+ other BitPay-supported cryptocurrencies within your Laravel application.',
  url: 'https://laravel-bitpay.netlify.app', // Url to your site with no trailing slash
  baseUrl: '/', // Base directory of your site relative to your repo
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/vrajroham/laravel-bitpay-docs/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/vrajroham/laravel-bitpay-docs/edit/main/releases/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Laravel Bitpay',
        logo: {
          alt: 'Laravel Bitpay Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documention',
          },
          {to: 'blog', label: 'Changelog', position: 'left'},
          // Please keep GitHub link to the right for consistency.
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Style Guide',
                to: 'docs/',
              },
              {
                label: 'Second Doc',
                to: 'docs/doc2',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/search?q=laravel+bitpay',
              },
              {
                label: '@Vrajroham on Twitter',
                href: 'https://twitter.com/vrajroham',
              },
              {
                label: '@AlexStewartJA on Twitter',
                href: 'https://twitter.com/AlexStewartJA',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Releases',
                to: 'blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/vrajroham/laravel-bitpay',
              },
            ],
          },
          {
            title: 'Legal',
            // Please do not remove the privacy and terms, it's a legal requirement.
            items: [
              {
                label: 'Privacy',
                href: 'https://opensource.facebook.com/legal/privacy/',
              },
              {
                label: 'Terms',
                href: 'https://opensource.facebook.com/legal/terms/',
              },
              {
                label: 'Data Policy',
                href: 'https://opensource.facebook.com/legal/data-policy/',
              },
              {
                label: 'Cookie Policy',
                href: 'https://opensource.facebook.com/legal/cookie-policy/',
              },
            ],
          },
        ],
        logo: {
          alt: 'Facebook Open Source Logo',
          src: 'img/oss_logo.png',
          href: 'https://opensource.facebook.com',
        },
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
