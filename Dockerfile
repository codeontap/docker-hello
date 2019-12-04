FROM python:3.6-alpine

EXPOSE 8000
ENV ENVIRONMENT="docker"

RUN apk add --no-cache \
        build-base

WORKDIR /app/
COPY src/ /app/

RUN pip install --no-cache-dir -r requirements.txt

CMD [ "gunicorn", "-b 0.0.0.0:8000", "-w 2", "app:app" ]
