## Example

````
import {  ProductButtons, ProductCard, ProductImage, ProductTitle } from 'wpl-product-card
```


```
 <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>

      ```
````
