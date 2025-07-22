def commit_callback(commit):
    if commit.author_name == b"BEN FLORENCE AJ ESPIRITU TIL":
        commit.author_name = b"Ford Bryant B. Sadio"
        commit.author_email = b"Aizen4rdy@example.com"
        commit.committer_name = b"Ford Bryant B. Sadio"
        commit.committer_email = b"Aizen4rdy@example.com"
