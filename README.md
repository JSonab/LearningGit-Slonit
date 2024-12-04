# Git :computer:
## :point_right:  Общие команды
- `cd C:\User\...` - **Переход в нужную папку**
- `mkdir` - **Создать папку**
- `ls` - **Показать все файлы**
- `ls -a` - **Показать все файлы, включая скрытые**
  
### *Создание файла с содержимым "Hello!"*
- `echo "Hello!" >> README.md`

### *Инициализация файла - "Запускаем" git для нашего репозитория*
- `git init`

### *Посмотреть статус файла*
- `git status`

### *Дообавление файла в index*
- `git add`

### *Создание коммита (благодаря -m мы можем назвать коммит)*
- `git commit -m "First commit"`

### *Перенос данных*
- `git push` - **C локального компьютера на github**
- `git pull` - **С github на локальный компьютер**  

## :point_right:  *Конфигурация*
### Добавление информации о пользователе
- `git config user.name "Sofya Belyaeva"` - **Имя** 
- `git config user.email Sonbeljaewa@mail.ru` - **Почта**

### Общие команды с config
- `git config --list` - **Посмотреть значение конфигурации**
- `git config -h` - **Посмотреть все команды**
- `git help config` - **Более подробная информация**

### Удаление значения конфигурации
- `git config --unset user.name` - **Например имени**

### Добавление новых команд
- `git config alias.sayhi '!echo "hello!"; echo "from git"'`

---
:blush: [Смотреть первоисточник](https://youtube.com/playlist?list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb&si=CJOcqcccxBpifFwL)
