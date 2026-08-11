https://www.youtube.com/watch?v=vQny41hG6-Q

https://www.postgresql.org/download/linux/redhat/

# Install the repository RPM:

sudo dnf install -y https://download.postgresql.org/pub/repos/yum/reporpms/F-44-x86_64/pgdg-fedora-repo-latest.noarch.rpm

# Install PostgreSQL:

sudo dnf install -y postgresql18-server

# Optionally initialize the database and enable automatic start:

```cmd
sudo /usr/pgsql-18/bin/postgresql-18-setup initdb
sudo systemctl enable postgresql-18
sudo systemctl start postgresql-18
sudo systemctl status postgresql-18
```

```cmd
\dt
sudo su -postgres
psql
```

```sql
select version();
\du
select usename from pg_user;
alter user postgres with password 'admin@123';
create database quiz;
\c quiz
\dt
create table questions(id int primary key, text varchar(100) not null);
insert into questions values(1, 'Столица Норвегии');
create user quizadmin with password 'admin@123';
\q
```

```cmd
psql -h localhost -U quizadmin -d postgres
select current_user;
\c quiz
sudo systemctl stop postgresql-18
sudo systemctl stop postgresql-18
sudo systemctl status postgresql-18(active: unactive должно быть)

```

```cmd
sudo su - postgres
sudo systemctl start postgresql-18
sudo systemctl restart postgresql-18

```
