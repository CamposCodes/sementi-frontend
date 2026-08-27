# sementi-frontend

Frontend do Sementi — app de vocabulário diário. Web, mobile-first.

**Stack:** Nuxt (Vue), OAuth2 Google, Chart.js/ApexCharts no painel

**Status:** em desenvolvimento (Fase 0 — setup)

**API:** [`sementi-backend`](https://github.com/CamposCodes/sementi-backend)

## Branches

```
main (produção)
  │
  └── feat/xxx  ou  fix/xxx        ← sai SEMPRE de main
        │
        └──▶ PR para develop        ← homologação
               │
               validado em develop e no ambiente de preview
               │
               └──▶ PR de develop para main   ← promoção para produção
```

- **`main`** — produção e branch padrão. PR obrigatório, check `build` verde obrigatório, sem force-push, sem deleção.
- **`develop`** — homologação. Aceita push direto; protegida apenas contra deleção e force-push.
- **`feat/*`, `fix/*`, `chore/*`** — saem de `main`, entram em `develop` via PR. Apagadas no merge.

Sair de `main` e não de `develop` é deliberado: a branch nasce do que está em produção, então o PR de promoção no fim do ciclo não carrega surpresa acumulada.

Não é git-flow clássico — não existe `release/*` nem `hotfix/*`.
