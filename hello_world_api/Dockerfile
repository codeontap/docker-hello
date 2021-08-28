FROM python:3.9-alpine

EXPOSE 8000

WORKDIR /app/
COPY src/ /app/

RUN pip install --no-cache-dir -r requirements.txt

CMD [ "gunicorn", "-b 0.0.0.0:8000", "-w 2", "app:app" ]
