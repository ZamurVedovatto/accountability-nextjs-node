import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

import { BreadCrumb } from 'primereact/breadcrumb'

import {
  locale,
  addLocale,
  updateLocaleOption,
  updateLocaleOptions,
  localeOption,
  localeOptions,
} from 'primereact/api'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import { Menubar } from 'primereact/menubar'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'

import type { AppProps } from 'next/app'

import Toolbar from './../layout/Toolbar'

const BreadCrumbWrapper = styled.div`
width: 100%
  position: fixed;
  top: 0;
`

const fakeEntries = [
  {
    label: 'File',
    icon: 'pi pi-fw pi-file',
    items: [
      {
        label: 'New',
        icon: 'pi pi-fw pi-plus',
        items: [
          {
            label: 'Bookmark',
            icon: 'pi pi-fw pi-bookmark',
          },
          {
            label: 'Video',
            icon: 'pi pi-fw pi-video',
          },
        ],
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash',
      },
      {
        separator: true,
      },
      {
        label: 'Export',
        icon: 'pi pi-fw pi-external-link',
      },
    ],
  },
  {
    label: 'Entry',
    icon: 'pi pi-fw pi-tag',
    items: [
      {
        label: 'Income',
        icon: 'pi pi-fw pi-angle-double-up',
        url: '/entry/income',
      },
      {
        label: 'Outome',
        icon: 'pi pi-fw pi-angle-double-down',
        url: '/entry/outcome',
      },
    ],
  },
  {
    label: 'Users',
    icon: 'pi pi-fw pi-user',
    items: [
      {
        label: 'New',
        icon: 'pi pi-fw pi-user-plus',
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-user-minus',
      },
      {
        label: 'Search',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'Filter',
            icon: 'pi pi-fw pi-filter',
            items: [
              {
                label: 'Print',
                icon: 'pi pi-fw pi-print',
              },
            ],
          },
          {
            icon: 'pi pi-fw pi-bars',
            label: 'List',
          },
        ],
      },
    ],
  },
  {
    label: 'Events',
    icon: 'pi pi-fw pi-calendar',
    items: [
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Save',
            icon: 'pi pi-fw pi-calendar-plus',
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-calendar-minus',
          },
        ],
      },
      {
        label: 'Archieve',
        icon: 'pi pi-fw pi-calendar-times',
        items: [
          {
            label: 'Remove',
            icon: 'pi pi-fw pi-calendar-minus',
          },
        ],
      },
    ],
  },
  {
    label: 'Quit',
    icon: 'pi pi-fw pi-power-off',
  },
]

addLocale('es', {
  firstDayOfWeek: 1,
  dayNames: [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado',
  ],
  dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
  dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
  monthNames: [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ],
  monthNamesShort: [
    'ene',
    'feb',
    'mar',
    'abr',
    'may',
    'jun',
    'jul',
    'ago',
    'sep',
    'oct',
    'nov',
    'dic',
  ],
  today: 'Hoy',
  clear: 'Limpiar',
})

addLocale('pt', {
  firstDayOfWeek: 1,
  dayNames: [
    'domingo',
    'segunda-feira',
    'terça-feira',
    'quarta-feira',
    'quinta-feira',
    'sexta-feira',
    'sábado',
  ],
  dayNamesShort: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
  dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  monthNames: [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maoo',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ],
  monthNamesShort: [
    'jav',
    'fev',
    'mar',
    'abr',
    'mai',
    'jun',
    'jul',
    'ago',
    'sey',
    'out',
    'nov',
    'dez',
  ],
  today: 'Hoje',
  clear: 'Limpar',
})

export default function App({ Component, pageProps }: AppProps) {
  locale('pt')

  const items = [{ label: 'Accounts' }, { label: 'Income' }]

  const home = {
    icon: 'pi pi-home',
    url: '/',
  }

  return (
    <>
      <BreadCrumbWrapper>
        <Menubar
          model={fakeEntries}
          start={<InputText placeholder="Search" type="text" />}
          end={<Button label="Logout" icon="pi pi-power-off" />}
        />
        <BreadCrumb model={items} home={home} />
      </BreadCrumbWrapper>
      <Component {...pageProps} />
      <Toolbar />
    </>
  )
}
