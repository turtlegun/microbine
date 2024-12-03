
FROM python:3.8-slim


WORKDIR /app


COPY requiremnt.txt /app/
RUN pip install -r requiremnt.txt


COPY . /app/

EXPOSE 5000

CMD ["python", "app.py"]
