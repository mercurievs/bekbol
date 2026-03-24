# Bekbol

Сервис состоит из двух частей:

- backend: FastAPI + SQLAlchemy + Alembic
- frontend: Next.js 14 (App Router)

Ниже инструкция для Windows, чтобы запускать проект самостоятельно без дополнительных подсказок.

## 1. Что должно быть установлено

1. Git
2. Node.js 20 LTS (рекомендуется)
3. Python 3.12 или 3.13 (рекомендуется)

Важно: Python 3.14 для этого проекта может не подойти из-за сборки pydantic-core.

Проверка версий:

```powershell
git --version
node -v
py -0p
```

## 2. Клонирование проекта

```powershell
git clone https://github.com/mercurievs/bekbol.git
cd bekbol
```

## 3. Настройка backend

Откройте первый терминал в корне проекта.

1. Перейдите в папку backend

```powershell
cd backend
```

2. Создайте и активируйте виртуальное окружение

Если установлен Python 3.12:

```powershell
py -3.12 -m venv ..\.venv
..\.venv\Scripts\Activate.ps1
```

Если установлен Python 3.13:

```powershell
py -3.13 -m venv ..\.venv
..\.venv\Scripts\Activate.ps1
```

3. Установите зависимости

```powershell
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
```

4. Создайте файл backend/.env

Содержимое:

```env
database_url=sqlite:///./bekbol.db
jwt_secret=change_me
api_host=0.0.0.0
api_port=8000
```

5. Примените миграции и запустите backend

```powershell
python -m alembic upgrade head
python -m uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

Backend должен быть доступен по адресу:

- http://127.0.0.1:8000/health
- http://127.0.0.1:8000/docs

## 4. Настройка frontend

Откройте второй терминал в корне проекта.

1. Перейдите в папку frontend

```powershell
cd frontend
```

2. Установите зависимости

```powershell
npm install
```

3. Создайте файл frontend/.env.local

Содержимое:

```env
BACKEND_URL=http://127.0.0.1:8000
```

4. Запустите frontend

```powershell
npm run dev
```

Frontend будет доступен по адресу:

- http://localhost:3000

## 5. Ежедневный запуск после первой настройки

После того как вы один раз выполнили установку зависимостей, каждый следующий запуск обычно такой:

Терминал 1 (backend):

```powershell
cd backend
..\.venv\Scripts\Activate.ps1
python -m alembic upgrade head
python -m uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

Терминал 2 (frontend):

```powershell
cd frontend
npm run dev
```

## 6. Быстрая проверка, что все работает

Откройте в браузере:

1. http://localhost:3000
2. http://127.0.0.1:8000/health
3. http://127.0.0.1:8000/docs

Если все страницы открываются, проект запущен корректно.

## 7. Частые проблемы и решение

### Ошибка ERR_CONNECTION_REFUSED на localhost:3000

Причина: frontend не запущен.

Решение:

```powershell
cd frontend
npm install
npm run dev
```

### Backend не запускается из-за pydantic-core / PyO3 / Rust ошибок

Причина: используется Python 3.14.

Решение: установить Python 3.12 или 3.13, пересоздать окружение и заново установить зависимости.

```powershell
cd backend
deactivate
Remove-Item -Recurse -Force ..\.venv
py -3.12 -m venv ..\.venv
..\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
```

### Frontend не может обратиться к backend

Проверьте:

1. Backend действительно запущен на порту 8000
2. В файле frontend/.env.local указано:

```env
BACKEND_URL=http://127.0.0.1:8000
```

3. После изменения .env.local перезапущен npm run dev

## 8. Полезные команды

Backend:

```powershell
python -m uvicorn app.main:app --host 0.0.0.0 --port 8000
python -m alembic revision --autogenerate -m "описание"
python -m alembic upgrade head
```

Frontend:

```powershell
npm run dev
npm run build
npm run start
```
