12.2: Sortable Complex data model example
=========================================
**Primary Actor**: User

**Scope**: Ngx-bootstrap DEMO / BS version 3&4

**Goal**: Show user sortable functionality with complex data model

Main success scenario:
----------------------
1. User opens Sortable demo page
2. User clicks on Complex data model sub-menu
3. User see 2 bs-sortable components (each of them contains of 3 items) by default
4. Under each component user see code-preview block with appropriate models (each object in model have id and name)
5. When user moves item from the first sortable component to another, then this item appeared in the second component and model changed appropriate
6. When user moved all items from the first sortable component, then text "Drag here" shown and model is empty
7. When user moved all items from the second sortable component to the first, then text "Drag here" shown and second model is empty and first contains all 6 items

Variations:
-----------
2*. User scroll to Complex data model sub-menu
