#!/usr/bin/env bash
# Download all Backbone Systems website assets from the Webflow CDN

BASE="https://cdn.prod.website-files.com/6318e08ac4910dc571c44f02"
BASE2="https://cdn.prod.website-files.com/612511e64869142d4d09463b"
OUT="/Users/bernardosuarez/Desktop/Repos/Backbone/assets"

download() {
  local url="$1"
  local dest="$2"
  echo "Downloading: $(basename $dest)"
  curl -sL --retry 3 -o "$dest" "$url"
}

# ── Logos & Brand ──────────────────────────────────────────────
download "$BASE/6318e2d9ffc55451438398bf_BackboneSystems_Blanco.svg"       "$OUT/images/logo-backbone.svg"
download "$BASE/639909494ab5021cd3ef31ce_Risj.png"                          "$OUT/images/logo-data-master.png"
download "$BASE/6399065e4ab502942eef0a69_Core.png"                          "$OUT/images/logo-core.png"
download "$BASE/639906696d1188b964915cdc_FCD.png"                           "$OUT/images/logo-fcd.png"
download "$BASE/6398e2688243f1ab39cef499_OnboardingV02.png"                 "$OUT/images/logo-onboarding.png"
download "$BASE/6398e25ce8570c2572ead5b1_AppEngineV02.png"                  "$OUT/images/logo-app-engine.png"
download "$BASE/6398e24c2c93ed7683d0a942_IssuingV02.png"                    "$OUT/images/logo-issuing.png"

# ── Hero & Key UI screenshots ──────────────────────────────────
download "$BASE/6318e3578ef86de63b74e3ff_hero_clm.png"                      "$OUT/images/hero-main.png"
download "$BASE/63912c6d5f8b7c5e1e7d0486_Side_Macbook_TRansparent.png"      "$OUT/images/macbook-side.png"

# ── Delivery page illustrations ────────────────────────────────
download "$BASE2/61287a99bc5f7f2b7eb625ef_L4-Build_Ill.png"                 "$OUT/images/delivery-build.png"
download "$BASE/6321359e693b925bdd4d1bd4_L4-Start_Ill.png"                  "$OUT/images/delivery-start.png"
download "$BASE/6321359e693b920ff84d1bcf_L4-Grow_Ill.png"                   "$OUT/images/delivery-grow.png"

# ── Data Master screenshots ────────────────────────────────────
download "$BASE/6399e574911f6d174d9c9ed6_Screenshot%202022-12-14%20at%209.02.03.png"    "$OUT/images/data-master-1.png"
download "$BASE/6399f0865b3707da02640422_Screenshot%202022-12-14%20at%209.49.10.png"    "$OUT/images/data-master-2.png"
download "$BASE/6394c34389f4b19131265f0d_Screenshot%202022-12-10%20at%2011.34.48.png"  "$OUT/images/data-master-3.png"
download "$BASE/6399f09ba99a7fece59074e7_Screenshot%202022-12-14%20at%209.49.18.png"   "$OUT/images/data-master-4.png"
download "$BASE/639a1650c9e84d29325cdf34_Screenshot%202022-12-14%20at%2012.29.37.png"  "$OUT/images/data-master-5.png"

# ── Core screenshots ───────────────────────────────────────────
download "$BASE/63976eafdbb8713a145a496d_Screenshot%202022-12-12%20at%2012.10.46.png"  "$OUT/images/core-1.png"
download "$BASE/63976edd135387ec5c3a0611_Screenshot%202022-12-12%20at%2012.11.33.png"  "$OUT/images/core-2.png"
download "$BASE/63976f20959ce37b599ea73b_Screenshot%202022-12-12%20at%2012.12.40.png"  "$OUT/images/core-3.png"

# ── Fincrime screenshots ───────────────────────────────────────
download "$BASE/639135335c35a62f7cf5e2ce_Screenshot%202022-12-07%20at%2018.51.53.png"  "$OUT/images/fcd-1.png"
download "$BASE/639a1635d100dee2744b85cb_Screenshot%202022-12-14%20at%2012.29.45.png"  "$OUT/images/fcd-2.png"
download "$BASE/6391f71d29871f314ebda166_Screenshot%202022-12-08%20at%208.38.55.png"   "$OUT/images/fcd-3.png"
download "$BASE/639207c1513c771091098707_Screenshot%202022-12-08%20at%209.50.10.png"   "$OUT/images/fcd-4.png"
download "$BASE/639a25da0133cafc84b846a0_Screenshot%202022-12-14%20at%2013.36.49.png"  "$OUT/images/fcd-5.png"

# ── Onboarding screenshots ─────────────────────────────────────
download "$BASE/63949b8e5b9ac919f2024420_Screenshot%202022-12-10%20at%208.45.24.png"   "$OUT/images/onboarding-1.png"
download "$BASE/63949d90ca3686036f108ce7_Screenshot%202022-12-10%20at%208.53.45.png"   "$OUT/images/onboarding-2.png"
download "$BASE/63978571a600cc1a85b5e3d8_Screenshot%202022-12-12%20at%2013.47.49.png"  "$OUT/images/onboarding-3.png"

# ── App Engine screenshots ─────────────────────────────────────
download "$BASE/6394aeb62c8cc340d043f5a5_Screenshot%202022-12-10%20at%2010.07.09.png"  "$OUT/images/app-engine-1.png"
download "$BASE/639a118644d6d56c7cd94ee4_Screenshot%202022-12-14%20at%2012.10.03.png"  "$OUT/images/app-engine-2.png"
download "$BASE/6394af0b6201a3c38896c10d_Screenshot%202022-12-10%20at%2010.08.35.png"  "$OUT/images/app-engine-3.png"
download "$BASE/6394af66c7a3f2ff847ef96d_Screenshot%202022-12-10%20at%2010.10.06.png"  "$OUT/images/app-engine-4.png"

# ── Issuing screenshots ────────────────────────────────────────
download "$BASE/6394b3cd8a7e8db95e42c869_Screenshot%202022-12-10%20at%2010.28.48.png"  "$OUT/images/issuing-1.png"
download "$BASE/6394c3536201a30161988616_Screenshot%202022-12-10%20at%2011.35.07.png"  "$OUT/images/issuing-2.png"
download "$BASE/6394c36a1bbe8576a2c62a84_Screenshot%202022-12-10%20at%2011.35.26.png"  "$OUT/images/issuing-3.png"
download "$BASE/6394c410c9e9c8a0fb66dc77_Screenshot%202022-12-10%20at%2011.38.16.png"  "$OUT/images/issuing-4.png"

# ── Home page UI screenshots ───────────────────────────────────
download "$BASE/631fe27fd655df85018b2524_Screenshot%202022-09-12%20at%2020.52.53.png"  "$OUT/images/home-ui-1.png"
download "$BASE/631fe229c2425766e54169de_Screenshot%202022-09-12%20at%2020.51.20.png"  "$OUT/images/home-ui-2.png"
download "$BASE/631f9eeba980c052897ca061_Screenshot%202022-09-12%20at%2016.03.57.png"  "$OUT/images/home-ui-3.png"
download "$BASE/631fa0cf7e50a7d412b8a903_Screenshot%202022-09-12%20at%2016.11.30.png"  "$OUT/images/home-ui-4.png"

# ── Fincrime additional ────────────────────────────────────────
download "$BASE/6399d5a20103106131d441de_Screenshot%202022-12-14%20at%207.54.31.png"   "$OUT/images/fcd-extra-1.png"
download "$BASE/6399d6ae4bf43b6947e0ad12_Screenshot%202022-12-14%20at%207.59.01.png"   "$OUT/images/fcd-extra-2.png"
download "$BASE/6399d6bf67b098ac773a9462_Screenshot%202022-12-14%20at%207.59.19.png"   "$OUT/images/fcd-extra-3.png"
download "$BASE/6399d6eee6e93657d0bd7023_Screenshot%202022-12-14%20at%208.00.04.png"   "$OUT/images/fcd-extra-4.png"
download "$BASE/6399f6dfe916b01957c2c94a_Screenshot%202022-12-14%20at%2010.16.20.png"  "$OUT/images/fcd-extra-5.png"
download "$BASE/6399f755af150c4294e50b89_Screenshot%202022-12-14%20at%2010.18.21.png"  "$OUT/images/fcd-extra-6.png"

# ── Icons ──────────────────────────────────────────────────────
download "$BASE/6318e08ac4910d6b65c44fa2_icon-4-features-v2-section-techkit-template.svg"  "$OUT/icons/icon-features-4.svg"
download "$BASE/6318e08ac4910d308cc44ff8_icon-6-features-v2-section-techkit-template.svg"  "$OUT/icons/icon-features-6.svg"
download "$BASE/6318e08ac4910d55b8c44fa5_icon-3-features-v2-section-techkit-template.svg"  "$OUT/icons/icon-features-3.svg"
download "$BASE/6318e08ac4910d48e3c44fa3_icon-5-features-v2-section-techkit-template.svg"  "$OUT/icons/icon-features-5.svg"
download "$BASE/6318e08ac4910dfc47c4500f_icon-5-values-techkit-template.svg"                "$OUT/icons/icon-values-5.svg"
download "$BASE/6318e08ac4910d6eafc45026_icon-3-benefits-techkit-template.svg"              "$OUT/icons/icon-benefits-3.svg"
download "$BASE2/6128e36d3eea8b7d17ec992c_Chevron.svg"                                     "$OUT/icons/chevron.svg"
download "$BASE/6318e08ac4910d281ec4502d_icon-3-contact-links-techkit-template.svg"        "$OUT/icons/icon-contact.svg"

# ── Backgrounds ────────────────────────────────────────────────
download "$BASE/6318e08ac4910d5dc7c44f72_bg-grid-techkit-template.svg"          "$OUT/bg/grid.svg"
download "$BASE/6318e08ac4910d6cd7c44ff6_bg-grid-cta-v4-techkit-template.svg"   "$OUT/bg/grid-cta.svg"
download "$BASE/6318e08ac4910d09b6c44f9e_bg-grid-cta-v2-techkit-template.svg"   "$OUT/bg/grid-cta-v2.svg"

echo ""
echo "✅ All assets downloaded!"
