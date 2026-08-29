# [Демо версия сайта](https://drag-and-drop-inventory.vercel.app/)

## Описание тестового задания

Вам необходимо реализовать веб-приложение - автономно работающий инвентарь, т.е. после закрытия браузера предметы и их позиции должны быть сохранены.

По нажатию на предмет инвентаря должна выезжать плашка с его описанием и кнопкой удалить (см. комментарии на [фигме](https://www.figma.com/file/ziQM2VcgY1D7UnX937cSEO/Vue-Test-Task)).

#### Дизайн

[Ссылка на дизайн в Figma](https://www.figma.com/file/ziQM2VcgY1D7UnX937cSEO/Vue-Test-Task)

#### Требования

- Не используйте никаких **ui** библиотек / **css** фреймворков.
- Используйте только **SCSS**.
- Реализация на **Vue 3 composition API**.
- (Опционально) Использование **TypeScript**.

#### Срок выполнения задания

1 день

#### Выполнение задания

Вам необходимо создать репозиторий на GitHub перед началом выполнения тестового задания и регулярно коммитить изменения в процессе работы.

---

## 📊 Автоматическая статистика проекта

- 📄 **Всего файлов**: 149
- 📜 **Всего строк кода**: 21355

## 📂 Структура проекта
```
📦 server
├── 📂 jobs
│   ├── 📜 clear-old-data.js (66 строк)
│   └── 📜 incremental-vacuum.js (28 строк)
├── 📂 model
│   ├── 📜 api_key.js (77 строк)
│   ├── 📜 docker_host.js (20 строк)
│   ├── 📜 group.js (47 строк)
│   ├── 📜 heartbeat.js (46 строк)
│   ├── 📜 incident.js (24 строк)
│   ├── 📜 maintenance.js (458 строк)
│   ├── 📜 monitor.js (1710 строк)
│   ├── 📜 proxy.js (26 строк)
│   ├── 📜 remote_browser.js (18 строк)
│   ├── 📜 status_page.js (492 строк)
│   ├── 📜 tag.js (19 строк)
│   └── 📜 user.js (54 строк)
├── 📂 modules — ⭐ Функциональные модули системы
│   ├── 📂 apicache
│   │   ├── 📜 apicache.js (918 строк)
│   │   ├── 📜 index.js (15 строк) — Точка входа модуля "apicache"
│   │   └── 📜 memory-cache.js (88 строк)
│   │   
│   ├── 📂 axios-ntlm
│   │   ├── 📂 lib
│   │   │   ├── 📜 flags.js (77 строк)
│   │   │   ├── 📜 hash.js (122 строк)
│   │   │   ├── 📜 ntlm.js (220 строк)
│   │   │   └── 📜 ntlmClient.js (127 строк)
│   │   │   
│   │   └── 📃 LICENSE (22 строк)
│   │   
│   └── 📂 dayjs
│       └── 📂 plugin
│           ├── 📜 timezone.d.ts (21 строк)
│           └── 📜 timezone.js (116 строк)
├── 📂 monitor-conditions
│   ├── 📜 evaluator.js (72 строк)
│   ├── 📜 expression.js (112 строк)
│   ├── 📜 operators.js (319 строк)
│   └── 📜 variables.js (32 строк)
├── 📂 monitor-types
│   ├── 📜 dns.js (90 строк)
│   ├── 📜 group.js (50 строк)
│   ├── 📜 mongodb.js (64 строк)
│   ├── 📜 monitor-type.js (32 строк)
│   ├── 📜 mqtt.js (118 строк)
│   ├── 📜 rabbitmq.js (68 строк)
│   ├── 📜 real-browser-monitor-type.js (282 строк)
│   ├── 📜 snmp.js (64 строк)
│   └── 📜 tailscale-ping.js (78 строк)
├── 📂 notification-providers
│   ├── 📜 46elks.js (36 строк)
│   ├── 📜 alerta.js (69 строк)
│   ├── 📜 alertnow.js (54 строк)
│   ├── 📜 aliyun-sms.js (144 строк)
│   ├── 📜 apprise.js (38 строк)
│   ├── 📜 bark.js (124 строк)
│   ├── 📜 bitrix24.js (32 строк)
│   ├── 📜 call-me-bot.js (24 строк)
│   ├── 📜 cellsynt.js (40 строк)
│   ├── 📜 clicksendsms.js (46 строк)
│   ├── 📜 dingding.js (102 строк)
│   ├── 📜 discord.js (121 строк)
│   ├── 📜 feishu.js (105 строк)
│   ├── 📜 flashduty.js (109 строк)
│   ├── 📜 freemobile.js (28 строк)
│   ├── 📜 goalert.js (37 строк)
│   ├── 📜 google-chat.js (96 строк)
│   ├── 📜 gorush.js (45 строк)
│   ├── 📜 gotify.js (32 строк)
│   ├── 📜 grafana-oncall.js (52 строк)
│   ├── 📜 gtx-messaging.js (34 строк)
│   ├── 📜 heii-oncall.js (53 строк)
│   ├── 📜 home-assistant.js (46 строк)
│   ├── 📜 keep.js (43 строк)
│   ├── 📜 kook.js (35 строк)
│   ├── 📜 line.js (70 строк)
│   ├── 📜 linenotify.js (53 строк)
│   ├── 📜 lunasea.js (68 строк)
│   ├── 📜 matrix.js (49 строк)
│   ├── 📜 mattermost.js (113 строк)
│   ├── 📜 nostr.js (128 строк)
│   ├── 📜 notification-provider.js (121 строк)
│   ├── 📜 ntfy.js (84 строк)
│   ├── 📜 octopush.js (77 строк)
│   ├── 📜 onebot.js (49 строк)
│   ├── 📜 onesender.js (48 строк)
│   ├── 📜 opsgenie.js (97 строк)
│   ├── 📜 pagerduty.js (115 строк)
│   ├── 📜 pagertree.js (94 строк)
│   ├── 📜 promosms.js (54 строк)
│   ├── 📜 pushbullet.js (57 строк)
│   ├── 📜 pushdeer.js (57 строк)
│   ├── 📜 pushover.js (59 строк)
│   ├── 📜 pushplus.js (57 строк)
│   ├── 📜 pushy.js (33 строк)
│   ├── 📜 rocket-chat.js (68 строк)
│   ├── 📜 send-grid.js (66 строк)
│   ├── 📜 serverchan.js (52 строк)
│   ├── 📜 serwersms.js (48 строк)
│   ├── 📜 sevenio.js (58 строк)
│   ├── 📜 signal.js (30 строк)
│   ├── 📜 signl4.js (53 строк)
│   ├── 📜 slack.js (179 строк)
│   ├── 📜 smsc.js (48 строк)
│   ├── 📜 smseagle.js (74 строк)
│   ├── 📜 smsmanager.js (30 строк)
│   ├── 📜 smspartner.js (47 строк)
│   ├── 📜 smtp.js (78 строк)
│   ├── 📜 splunk.js (115 строк)
│   ├── 📜 squadcast.js (61 строк)
│   ├── 📜 stackfield.js (45 строк)
│   ├── 📜 teams.js (241 строк)
│   ├── 📜 techulus-push.js (37 строк)
│   ├── 📜 telegram.js (45 строк)
│   ├── 📜 threema.js (78 строк)
│   ├── 📜 twilio.js (39 строк)
│   ├── 📜 waha.js (41 строк)
│   ├── 📜 webhook.js (56 строк)
│   ├── 📜 wecom.js (52 строк)
│   ├── 📜 whapi.js (40 строк)
│   ├── 📜 wpush.js (52 строк)
│   ├── 📜 yzj.js (58 строк)
│   └── 📜 zoho-cliq.js (102 строк)
├── 📂 routers
│   ├── 📜 api-router.js (632 строк)
│   └── 📜 status-page-router.js (248 строк)
├── 📂 socket-handlers
│   ├── 📜 api-key-socket-handler.js (156 строк)
│   ├── 📜 chart-socket-handler.js (39 строк)
│   ├── 📜 cloudflared-socket-handler.js (123 строк)
│   ├── 📜 database-socket-handler.js (43 строк)
│   ├── 📜 docker-socket-handler.js (83 строк)
│   ├── 📜 general-socket-handler.js (128 строк)
│   ├── 📜 maintenance-socket-handler.js (338 строк)
│   ├── 📜 proxy-socket-handler.js (62 строк)
│   ├── 📜 remote-browser-socket-handler.js (83 строк)
│   └── 📜 status-page-socket-handler.js (380 строк)
├── 📂 utils
│   ├── 📂 knex
│   │   └── 📂 lib
│   │       └── 📂 dialects
│   │           └── 📂 mysql2
│   │               └── 📂 schema
│   │                   └── 📜 mysql2-columncompiler.js (23 строк)
│   │   
│   ├── 📜 array-with-key.js (86 строк)
│   ├── 📜 limit-queue.js (49 строк)
│   └── 📜 simple-migration-server.js (85 строк)
├── 📜 2fa.js (19 строк)
├── 📜 auth.js (180 строк)
├── 📜 check-version.js (70 строк)
├── 📜 client.js (253 строк)
├── 📜 config.js (47 строк)
├── 📜 database.js (915 строк)
├── 📜 docker.js (180 строк)
├── 📜 embedded-mariadb.js (220 строк)
├── 📜 google-analytics.js (29 строк)
├── 📜 image-data-uri.js (80 строк)
├── 📜 jobs.js (59 строк)
├── 📜 notification.js (291 строк)
├── 📜 password-hash.js (45 строк)
├── 📜 prometheus.js (124 строк)
├── 📜 proxy.js (202 строк)
├── 📜 rate-limiter.js (76 строк)
├── 📜 remote-browser.js (75 строк)
├── 📜 server.js (1878 строк)
├── 📜 settings.js (178 строк)
├── 📜 setup-database.js (272 строк)
├── 📜 uptime-calculator.js (866 строк)
├── 📜 uptime-kuma-server.js (560 строк)
└── 📜 util-server.js (1065 строк)

```

### 📁 Количество файлов и строк (server):
  - .js: 147 файлов, 21312 строк
  - 📃 Другое: 1 файлов, 22 строк
  - .ts: 1 файлов, 21 строк

### 📊 Топ-5 длинных файлов (server):
- 🔍 server.js — 1878 строк
- 🔍 monitor.js — 1710 строк
- 🔍 util-server.js — 1065 строк
- 🔍 apicache.js — 918 строк
- 🔍 database.js — 915 строк