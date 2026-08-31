
┌─────────────────────────────────────────┐
│              ScreenLayout               │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │             Header                │  │
│  └───────────────────────────────────┘  │
│                                         │
│          HomePage                       │
│          ├ CurrentWeather               │
│          ├ HourlyForecast                │
│          ├ DailyForecast                │
│          └ WeatherHighlights             │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │          CustomTabBar             │  │
│  │ Home │ Forecast │ Saved │ Settings│  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘


src/
│
├── app/ # ИНФРАСТРУКТУРА ПРИЛОЖЕНИЯ
│ │
│ ├── \_layout.tsx # Корневой layout Expo Router
│ │
│ ├── (tabs)/ # Tab-навигация Expo Router
│ │ ├── \_layout.tsx # <Tabs />
│ │ ├── index.tsx # route → HomePage
│ │ ├── forecast.tsx # route → ForecastPage
│ │ ├── saved.tsx # route → SavedPage
│ │ └── settings.tsx # route → SettingsPage
│ │
│ ├── search/ # route Search
│ │ └── index.tsx # route → SearchPage
│ │
│ └── navigation/
│ ├── config/
│ │ └── tabs.config.ts # конфигурация TabBar
│ │
│ └── ui/
│ ├── CustomTabBar/
│ │ ├── CustomTabBar.tsx
│ │ ├── TabBarItem.tsx
│ │ └── styles.ts
│ │
│ └── Header/
│ ├── Header.tsx
│ └── HeaderLeft.tsx
│
│
├── pages/ # ПОЛНОЦЕННЫЕ ЭКРАНЫ
│ │
│ ├── home/
│ │ ├── ui/
│ │ │ └── HomePage.tsx
│ │ └── index.ts
│ │
│ ├── forecast/
│ │ ├── ui/
│ │ │ └── ForecastPage.tsx
│ │ └── index.ts
│ │
│ ├── search/
│ │ ├── ui/
│ │ │ └── SearchPage.tsx
│ │ └── index.ts
│ │
│ ├── saved/
│ │ ├── ui/
│ │ │ └── SavedPage.tsx
│ │ └── index.ts
│ │
│ └── settings/
│ ├── ui/
│ │ └── SettingsPage.tsx
│ └── index.ts
│
│
├── widgets/ # КРУПНЫЕ БЛОКИ UI
│ │
│ ├── home/
│ │ ├── CurrentWeather/
│ │ ├── WeatherHighlights/
│ │ ├── HourlyForecast/
│ │ └── DailyForecast/
│ │
│ ├── search/
│ │ └── SearchResults/
│ │
│ ├── saved/
│ │ └── SavedCities/
│ │
│ └── weather/
│ └── AirQuality/
│
│
├── features/ # ДЕЙСТВИЯ ПОЛЬЗОВАТЕЛЯ
│ │
│ ├── search-city/
│ │ ├── model/
│ │ ├── api/
│ │ ├── ui/
│ │ └── lib/
│ │
│ ├── select-city/
│ │ ├── model/
│ │ └── lib/
│ │
│ ├── save-city/
│ │ ├── model/
│ │ └── ui/
│ │
│ ├── refresh-weather/
│ │ └── model/
│ │
│ ├── change-units/
│ │ └── model/
│ │
│ ├── change-theme/
│ │ └── model/
│ │
│ └── change-language/
│ └── model/
│
│
├── entities/ # СУЩНОСТИ / ДАННЫЕ
│ │
│ ├── city/
│ │ ├── api/
│ │ ├── model/
│ │ ├── types/
│ │ ├── lib/
│ │ └── ui/
│ │
│ ├── weather/
│ │ ├── api/
│ │ ├── model/
│ │ ├── types/
│ │ ├── lib/
│ │ └── ui/
│ │
│ ├── forecast/
│ │ ├── api/
│ │ ├── model/
│ │ └── types/
│ │
│ ├── air-quality/
│ │ ├── api/
│ │ ├── model/
│ │ └── types/
│ │
│ ├── location/
│ │ ├── api/
│ │ ├── model/
│ │ └── types/
│ │
│ └── settings/
│ ├── model/
│ └── types/
│
│
└── shared/ # ОБЩИЕ РЕСУРСЫ
│
├── ui/ # универсальные UI-компоненты
│ ├── StyledText/
│ ├── StyledInput/
│ ├── StyledButton/
│ ├── Icon/
│ ├── IconButton/
│ ├── Card/
│ └── ...
│
├── theme/ # ЕДИНАЯ DESIGN SYSTEM
│ ├── colors.ts
│ ├── gradients.ts
│ ├── radius.ts
│ ├── spacing.ts
│ ├── typography.ts
│ ├── theme.ts
│ └── index.ts
│
├── hooks/ # действительно глобальные hooks
│
├── lib/ # общие функции
│ ├── date/
│ ├── format/
│ └── validation/
│
├── api/ # общий HTTP client
│ └── weatherClient.ts
│
├── constants/
│
└── types/
