# Bekbol

Проект состоит из двух частей:

- backend: FastAPI + SQLAlchemy + Alembic
- frontend: Next.js 14 (App Router)

## Быстрый запуск (Windows)

1. Клонируйте проект:

   git clone <https://github.com/mercurievs/bekbol.git>
   cd bekbol

2. Запустите backend (в первом терминале):

   cd backend
   python -m venv .venv
   .\.venv\Scripts\activate
   pip install -r requirements.txt

   Создайте файл .env в папке backend со значениями:

   database_url=sqlite:///./bekbol.db
   jwt_secret=change_me
   api_host=0.0.0.0
   api_port=8000

   Примените миграции и стартуйте API:

   alembic upgrade head
   uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload

3. Запустите frontend (во втором терминале):

   cd frontend
   npm install

   Создайте файл .env.local в папке frontend:

   BACKEND_URL=<http://127.0.0.1:8000>

   Запустите фронтенд:

   npm run dev

4. Откройте в браузере:

- frontend: <http://localhost:3000>
- backend health-check: <http://127.0.0.1:8000/health>
- backend docs (Swagger): <http://127.0.0.1:8000/docs>

## Полезные команды

Backend:

- запуск без reload: uvicorn app.main:app --host 0.0.0.0 --port 8000
- новая миграция: alembic revision --autogenerate -m "описание"
- применить миграции: alembic upgrade head

Frontend:

- dev: npm run dev
- build: npm run build
- prod-start: npm run start

## Частые проблемы

1. Ошибка CORS

- Проверьте, что frontend открыт на <http://localhost:3000>
- При необходимости добавьте origin в backend app/core/config.py

1. Ошибка подключения frontend к backend

- Проверьте BACKEND_URL в frontend/.env.local
- Проверьте, что backend запущен на порту 8000

1. Ошибки миграций

- Выполняйте команды alembic из папки backend
- Убедитесь, что файл backend/.env существует и содержит корректный database_url

## Структура

- backend/: API, модели, схемы, миграции
- frontend/: UI на Next.js
- .github/: инструкции Copilot
