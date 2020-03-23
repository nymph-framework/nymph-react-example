from nymph import Nymph
from nymph.staticfiles import StaticFiles
from nymph.templating import Jinja2Templates


# Configure Static and Template instances
static = StaticFiles(path="/static", directory="./src/static")
templates = Jinja2Templates(directory="src/templates")

app = Nymph()
app.mount(static)

@app.route("/")
async def index(req):
    res = templates.TemplateResponse("index.html", {
        "message": "This is Nymph-React example."
    })
    return res
