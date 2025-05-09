# Pet Food Finder Portal

## 📌 Project Overview
Pet Food Finder Portal is a pet food aggregator web portal, which allows to search for a pet food based on a provided criteria such as pet type, age, food type, price. It is a search based engine which provides an option to search pet food products based on title, brand, description, as well as to filter them by price and rating range.

#### Pages:
- Main page: an overview of the portal with its key functionality explained;
- Product search journey (2 pages): 2 steps on which a user choses pet type, pet age (1st page), food type, price (2nd page);
- Product list page: a list of all products, as well as a search bar and filter;
- Product details page: an overview of the product, reviews, and retailers which lead to retailers' external website;
- About Us page: a basic information on the company and its mission, as well as a list of employees;

## 🎨 Design
The intention was to create a mobile first application, as it was identified during the market research that most of the users would prefer mobile over desktop application. 
Figma design: https://www.figma.com/proto/GFzijU5p7Uzh2cQqo1R2Ae/PetFoodFinder?node-id=1059-10731&t=pZGecIobTXVYvvV7-1

## ✅ 🖥 Features and components

### General
- Header;
- Footer;
- Hamburger menu (home, about us, all products);

### Main page
| Component            | Functionality                       | 
|----------------------|-------------------------------------|
| _Get started_ button | Redirects to product search journey | 
| Info text block      |                                     |

### Product search/ Pet selection
| Component            | Functionality                          | 
|----------------------|----------------------------------------|
| Pet selection radio button group      | Choose pet type       | 
| Pet age selection radion button group | Choose pet age        |
| _Continue_ button                | Redirects to the next page |

### Product search/ Food selection
| Component            | Functionality                          | 
|----------------------|----------------------------------------|
| Food selection radio button group | Choose food characteristics (multiple allowed) | 
| Price slider                      | Choose food max price           |
| _Search_ button                   | Redirects to product list page  |

### Product list
| Component            | Functionality                          | 
|----------------------|----------------------------------------|
| Product list  | Display products by chosen criteria           | 
| Search bar    | Searches by inserted word within brand, origin, title, description |
| Filter        | Filter by pet age, pet type, characteristics, rating, price        |
| Reset filter  | Display all products                          |
| Product card  | When clicked redirects to product details page|
| Pagination    | Display products by pages                     |

### Product details
| Component            | Functionality                          | 
|----------------------|----------------------------------------|
| Info  | Display product image, min price, descriptions, title, No of retailers | 
| Retailers   | When clicked redirect to external site         |
| Reviews     | Display all reviews for the product             |
| Add review  | Opens a review form                             |
| Review form | Fill in the form and send a review              |
| Review pagination | Reviews displayed by page                 |

### About Us
| Component        | Functionality                          | 
|------------------|----------------------------------------|
| Info             | Display info about the company, mission| 
| Employees        | Display all employees by job title     |

## 🛠️ Technologies Used
- React 18
- Next.js 13 (App Router)
- Redux Toolkit
- Axios
- CSS modules
- TypeScript

## 🧩 Application Structure
- `app/`: Next.js pages and layouts
- `components/`: Reusable UI components
- `store/`: Redux state management
- `services/`: API interaction logic
- `public/`: Images and icons
- `styles/`: CSS
- `types/`: models

## 📆 Development Log

| Date       | Task                     | Time Spent |
|------------|--------------------------|------------|
| 2025-02-06 | Main page                | 4h         |
| 2025-02-07 | Header, footer           | 5h         |
| 2025-02-08 | Pet selection page       | 4h         |
| 2025-02-09 | Food selection page      | 6h         |
| 2025-02-10 | Services and API calls   | 4h         |
| 2025-02-11 | Product list             | 5h         |
| 2025-02-16 | Pagination               | 3h         |
| 2025-02-17 | Search and filter        | 6h         |
| 2025-02-22 | Product details page     | 5h         |
| 2025-02-23 | Reviews                  | 2h         |  
| 2025-02-24 | Add review               | 2h         |
| 2025-02-26 | About Us                 | 1h         |
| 2025-02-28 | Documentation            | 1h         |
| 2025-03-01 | Deployment               | 2h         |
| **Total**  |                          | **49h**    |

## Future work
Future improvements will include:
- the a dynamic update of the price for the product whenever the retailer is added/updated;
- styling adjustment for the desktop;
- refinement of the displayed information on pages and in footer;

## 📝 Self-Evaluation

**Reflection**: 
The creation of the frontend application in React with Next.js provided me with a new knowledge and skills on the technologies such as Redux state management, Next.js, Axios, and React itself.
Some time was spent in order to learn the technology, as I had no prior experience working with this technology stack. 
The main outcome of the course is a gained skill to create a frontend application from scratch. the gained skills will be heavily used within my daily work. 

## Getting Started with development

To install libraries run:
```bash
npm install
```

To run development server run:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deployment

The application is deployed on Vercel.
