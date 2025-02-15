export enum TrackingCategories {
  Language = 'language',
  Menu = 'menu',
  Navigation = 'navigation',
  Wallet = 'wallet',
  SupportModal = 'support-modal',
  ThemeMenu = 'theme-menu',
  ThemeSwitch = 'theme-switch',
  WidgetEvent = 'widget-event',
}

export enum TrackingActions {
  AddChain = 'add-chain',
  AddToken = 'add-token',
  ClickThemeSwitch = 'click-theme-switch',
  ChooseWallet = 'choose-wallet',
  Disconnect = 'disconnect',
  OnRouteExecutionStarted = 'onRouteExecutionStarted',
  OnRouteExecutionCompleted = 'onRouteExecutionCompleted',
  OnRouteExecutionFailed = 'onRouteExecutionFailed',
  OnRouteExecutionUpdated = 'onRouteExecutionUpdated',
  OpenConnectedMenu = 'open-connected-menu',
  OpenSubmenu = 'open-submenu',
  OpenSupportModal = 'open-support-modal',
  SwitchChain = 'switch-chain',
  SwitchLanguage = 'switch-language',
  SwitchTab = 'switch-tab',
  SwitchThemeMode = 'switch-theme-mode',
}
