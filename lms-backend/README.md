# LMS Backend

Django REST backend for the LMS project.

## Endpoints
- `GET /api/health/` — health check

## Local setup

```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## Run tests
```bash
python manage.py test
```

## Environment variables (for Postgres — omit to use local SQLite)
| Variable      | Default     |
|---------------|-------------|
| `PGHOST`      | `localhost` |
| `PGPORT`      | `5432`      |
| `PGUSER`      | `postgres`  |
| `PGPASSWORD`  | `postgres`  |
| `PGDATABASE`  | (unset — uses SQLite if not set) |

## CI/CD
No pipeline yet — build it yourself in `.github/workflows/`.
