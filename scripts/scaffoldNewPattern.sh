folderName=src/pages/"$1"Page
pageComponent="$1"Page
patternComponent=$1
index=index

# Make folder + files
mkdir -p -v $folderName;
touch $folderName/$pageComponent.tsx
touch $folderName/$patternComponent.tsx
touch $folderName/$index.ts

# Add some basic boilerplate
cat > $folderName/$pageComponent.tsx << ENDOFFILE
const $pageComponent = () => {
  return (

  )
}

export default $pageComponent

ENDOFFILE

cat > $folderName/$index.ts << ENDOFFILE
export { default as $pageComponent } from './$pageComponent'

ENDOFFILE