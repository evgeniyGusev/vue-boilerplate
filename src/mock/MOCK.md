## MOCK

Данная директория предназначена для хранения большых объемов статических данных. Формат данных - либо объекты `JSON`,
либо объекты(функции) `javaScript`. Здесь хранятся все данные, которые могут рендериться в циклах, либо использоваться 
в одинаковой структуре, но в разных компонентах. Моки должны располагаться в поддиректориях, названных идентично компоненту, в котором они используются:
`mock/main_block/slides.json`

* **Пример цикличного рендера:** Слайдер с изображением, заголовком и описанием. Его данные лучше записать в виде коллекции сущностей:

  ```
  [
    {
      "title": "заголовок слайда",
      "text": "текст в слайде",
      "image": {
        "x1": "img/block/pic-1.png"
        "x2": "img/block/pic-1@2x.png"
      }
    },
    {
      "title": "заголовок слайда",
      "text": "текст в слайде",
      "image": {
        "x1": "img/block/pic-2.png"
        "x2": "img/block/pic-2@2x.png"
      }
    },
    ......
  ]
  ```
  Если сущностей будет хотя бы 5, то такой объем данных сильно загрузит компонент, поэтому храним его в моке и импортируем.
* **Пример использования одинаковой структуры на разных страницах**: есть две страницы, которые по структуре идентичны, но контент разный.
  Чтобы сократить количество кода, можно создать `js`-мок, который на основе `$route.name` будет возвращать нужный контент:

  ```
  // в моке
  const content = {
    subaruPage: {
      title: 'Subaru',
      text: 'Subaru the best',
      mainSlider: [...],
    },
    hondaPage: {
      title: 'Honda',
      text: 'Honda the best',
      mainSlider: [...],
    },
    bmwPage: {
      title: 'BMW',
      text: 'BMW the best',
      mainSlider: [...],
    }
  }
  
  export default function getContent(name = 'subaruPage') {
    return content[name];
  }
  
  // в компоненте
  import getContent from '@/mock/main/pageContent';
  
  export default {
    computed: {
      content() {
        return getContent(this.$route.name);
      }
    }
  }
  ```
  
    Итого нам хватит одного компонента страницы и одного `js`-файла для рендера 50-ти разных представлений. Но нужно быть уверенным, что представление страниц максимально идентичны, или имеют минимальные различия, чтобы не превратить компонент в условную помойку
