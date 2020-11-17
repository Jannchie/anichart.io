export default function ({
  isHMR,
  app,
  store,
  route,
  params,
  error,
  redirect,
}) {
  const defaultLocale = app.i18n.fallbackLocale;
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) {
    return;
  }
  // Get locale from params
  const locale = params.lang;
  if (route.fullPath === '/') {
    store.commit('SET_LANG', defaultLocale);
    app.i18n.locale = store.state.locale;
    return redirect(`/${defaultLocale}${route.fullPath}`);
  }
  // Set locale
  store.commit('SET_LANG', locale);
  app.i18n.locale = store.state.locale;
}
